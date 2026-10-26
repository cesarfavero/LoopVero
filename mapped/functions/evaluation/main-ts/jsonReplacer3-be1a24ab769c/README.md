# `jsonReplacer3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/main.ts` · [README do módulo](../../../../modules/evaluation/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630742-630748](../../../../../reference/runtime/sand-eval-runner.cjs#L630742-L630748) | `FunctionDeclaration` | não | `_key, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630742-630748](../../../../../reference/runtime/sand-eval-runner.cjs#L630742-L630748) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630742

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `value.toString`.

SHA-256 do trecho: `a9e2ac6e5297464bd50ba01b34e07fac26661a043c26d72402b81fde56c0a1b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
