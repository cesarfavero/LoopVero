# `wait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225277-225285](../../../../../reference/runtime/host-main.cjs#L225277-L225285) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:1765-1773](../../../../../reference/runtime/sand-eval-runner.cjs#L1765-L1773) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225277-225285](../../../../../reference/runtime/host-main.cjs#L225277-L225285) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1765-1773](../../../../../reference/runtime/sand-eval-runner.cjs#L1765-L1773) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225277

Chamadas escritas diretamente neste corpo: `new Promise`.

SHA-256 do trecho: `230e4a5a91e5175ec0a543c5c4f9a6bad638644105ef8f82d8339459f19c0c6c`.

### evaluation:1765

Chamadas escritas diretamente neste corpo: `new Promise`.

SHA-256 do trecho: `12667d611d16bcb0c20d09f551aa1217c492cb8d96f81ec2063c5ce0f36fcf8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
