# `stepStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615782-615790](../../../../../reference/runtime/host-main.cjs#L615782-L615790) | `FunctionExpression` | não | `privacyMode, stepId` |
| [evaluation:284502-284510](../../../../../reference/runtime/sand-eval-runner.cjs#L284502-L284510) | `FunctionExpression` | não | `privacyMode, stepId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615782-615790](../../../../../reference/runtime/host-main.cjs#L615782-L615790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284502-284510](../../../../../reference/runtime/sand-eval-runner.cjs#L284502-L284510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615782

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `0738693abcb349bef309e58bc33e7ca6466a8ef168fd53528654ef1988edca75`.

### evaluation:284502

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `0738693abcb349bef309e58bc33e7ca6466a8ef168fd53528654ef1988edca75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
