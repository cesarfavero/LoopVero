# `startAgentIdentity/reportCapabilityFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496628-496639](../../../../../../../reference/runtime/host-main.cjs#L496628-L496639) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496628-496639](../../../../../../../reference/runtime/host-main.cjs#L496628-L496639) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:496628

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportAgentIdentitySync`, `context2.host.log`, `errorLogTag`, `logFields`.

SHA-256 do trecho: `bd8fe1021f4068595560c3ff128a95d0f1ef85513656ff82ea5ab657118767b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
