# `findBlobNotFoundError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-not-found-error.js` · [README do módulo](../../../../modules/agent-kv/blob-not-found-error-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616371-616386](../../../../../reference/runtime/host-main.cjs#L616371-L616386) | `FunctionDeclaration` | não | `error64` |
| [evaluation:284911-284926](../../../../../reference/runtime/sand-eval-runner.cjs#L284911-L284926) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616371-616386](../../../../../reference/runtime/host-main.cjs#L616371-L616386) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:284911-284926](../../../../../reference/runtime/sand-eval-runner.cjs#L284911-L284926) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:616371

Chamadas escritas diretamente neste corpo: `isBlobNotFoundErrorNode`.

Alvos de atribuição ou incremento: `current2`, `depth`.

SHA-256 do trecho: `0fdced12d4016c4120d07873eff1917cf7309a513e3eb590c666521ce5d9cf46`.

### evaluation:284911

Chamadas escritas diretamente neste corpo: `isBlobNotFoundErrorNode`.

Alvos de atribuição ou incremento: `current2`, `depth`.

SHA-256 do trecho: `cc69fa043bb0f9dec9255805df5c028f9a6d6e7aee0b15c2e5df06dcf93f7e4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
