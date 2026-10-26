# Static research tools

Estas ferramentas geram e verificam o mapa a partir dos arquivos de referência que já estão no repositório. Não contêm etapas de obtenção das referências, não importam os bundles e não inicializam serviços do harness.

## Requisitos

- Node.js 22 ou superior para o script de análise.
- Acorn 8.18.0, fixado no lockfile desta pasta.
- Python 3.10 ou superior para renderização e verificação.
- Um checkout com os originais de `reference/`.

## Geração

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
```

O indexador lê a AST dos três bundles centrais. O renderizador substitui apenas os diretórios gerados `mapped/modules/` e `mapped/functions/`, além de seus índices. Explicações escritas manualmente vivem em `guide/` e não são substituídas.

## Verificação

```bash
python3 tools/research/verify-reference.py
```

O modo padrão exige todos os originais do manifesto. Para uma cópia de análise que contém apenas parte dos originais:

```bash
python3 tools/research/verify-reference.py --available
```

Nesse caso, o relatório distingue arquivos verificados e não baixados. Essa opção não permite apresentar uma cópia parcial como verificação integral dos bytes. A correspondência de toda a árvore Git pode ser verificada separadamente pelos blob SHAs do manifesto.

## Contratos dos scripts

| Script | Entrada | Saída | Efeito sobre os originais |
| --- | --- | --- | --- |
| `index-harness.cjs` | Três bundles como texto | Inventários AST, métricas e hashes | Somente leitura |
| `render-catalog.py` | Inventários | READMEs de módulos e funções | Nenhum |
| `verify-reference.py` | Manifesto, originais e documentação | Relatório de hashes e links | Somente leitura |

O parser conserva as linhas LF e não usa uma heurística de contar funções por expressão regular. As chamadas registradas continuam sendo referências sintáticas, sem resolução dinâmica. [Método completo](../../guide/methodology/README.md).
