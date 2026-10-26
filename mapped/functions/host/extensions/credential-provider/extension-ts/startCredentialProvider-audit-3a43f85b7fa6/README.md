# `startCredentialProvider/audit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551501-551516](../../../../../../../reference/runtime/host-main.cjs#L551501-L551516) | `ArrowFunctionExpression` | não | `entry, sensitiveValues` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551501-551516](../../../../../../../reference/runtime/host-main.cjs#L551501-L551516) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:551501

Chamadas escritas diretamente neste corpo: `auditLine`, `context2.deps.telemetry.logs.reportCredentialFillOutcome`, `context2.deps[computed].get`, `credentialTargetDomain`, `extensionHost`.

SHA-256 do trecho: `c3aba0561580d0c082bdf5ea47fa4445400f227d1ec8b8a38adb309ac64a0d71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
