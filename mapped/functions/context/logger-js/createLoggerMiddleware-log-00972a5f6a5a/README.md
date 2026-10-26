# `createLoggerMiddleware/log`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225735-225740](../../../../../reference/runtime/host-main.cjs#L225735-L225740) | `ArrowFunctionExpression` | não | `ctx, entry` |
| [evaluation:2223-2228](../../../../../reference/runtime/sand-eval-runner.cjs#L2223-L2228) | `ArrowFunctionExpression` | não | `ctx, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225735-225740](../../../../../reference/runtime/host-main.cjs#L225735-L225740) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2223-2228](../../../../../reference/runtime/sand-eval-runner.cjs#L2223-L2228) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225735

Chamadas escritas diretamente neste corpo: `backend.log`.

SHA-256 do trecho: `f9219336f1266f29bd5754302ec10871818cf3664108af6c77f64e83a62ddc05`.

### evaluation:2223

Chamadas escritas diretamente neste corpo: `backend.log`.

SHA-256 do trecho: `f9219336f1266f29bd5754302ec10871818cf3664108af6c77f64e83a62ddc05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
