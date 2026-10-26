# `policyStoppedTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/policy-stop-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/policy-stop-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455747-455758](../../../../../../reference/runtime/host-main.cjs#L455747-L455758) | `FunctionDeclaration` | não | `stop, process3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455747-455758](../../../../../../reference/runtime/host-main.cjs#L455747-L455758) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:455747

Chamadas escritas diretamente neste corpo: `SandError.policyStopped`, `brandLiteralEnum`, `brandedErrorClass`, `brandedOrInvalidId`, `logFields`, `sandErrorTags`.

SHA-256 do trecho: `908954aea6ebdd55f9a6c8a808a9ed80fc40504a7805b009222fb688b45a05e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
