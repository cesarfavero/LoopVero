# `getAgentProfileText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-profile-files.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-profile-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722804-722814](../../../../../../../reference/runtime/host-main.cjs#L722804-L722814) | `FunctionDeclaration` | não | `host, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722804-722814](../../../../../../../reference/runtime/host-main.cjs#L722804-L722814) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:722804

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `host.getAgentDir`, `readSandProfileFile`.

SHA-256 do trecho: `041d7af91954139110dbc72d1f4bd32cefab26945fb96ac4bf3f1e3797a927b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
