# `cloneAgentDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716955-716971](../../../../../../../reference/runtime/host-main.cjs#L716955-L716971) | `FunctionDeclaration` | não | `sourceDir, targetDir, newAgentId, profile, createAgentDb` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716955-716971](../../../../../../../reference/runtime/host-main.cjs#L716955-L716971) | 0 | 0 | 0 | 0 | 1 | 1 |

### host:716955

Chamadas escritas diretamente neste corpo: `cloneAutomations`, `cloneAvatarFiles`, `cloneStoreDb`, `copyIfPresent`, `ensureSandDataDirSync`, `getSandSettingsPath`, `removeSandDataTreeSync`, `rewriteClonedAgentIdentity`, `writeClonedProfile`, `writeSandSettingsFile`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ffde1d9e02b5403f82259234f8a12f41aafbf886bcae0dad9f81250e5b879f42`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
