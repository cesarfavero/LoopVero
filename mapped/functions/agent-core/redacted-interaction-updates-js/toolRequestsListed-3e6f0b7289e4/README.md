# `toolRequestsListed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615791-615802](../../../../../reference/runtime/host-main.cjs#L615791-L615802) | `FunctionExpression` | não | `privacyMode, callCount` |
| [evaluation:284511-284522](../../../../../reference/runtime/sand-eval-runner.cjs#L284511-L284522) | `FunctionExpression` | não | `privacyMode, callCount` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615791-615802](../../../../../reference/runtime/host-main.cjs#L615791-L615802) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284511-284522](../../../../../reference/runtime/sand-eval-runner.cjs#L284511-L284522) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615791

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `a0b15c0110882ddd61a9e96d7c409dec61186b44894c93b453bdf301c880bbdb`.

### evaluation:284511

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `a0b15c0110882ddd61a9e96d7c409dec61186b44894c93b453bdf301c880bbdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
