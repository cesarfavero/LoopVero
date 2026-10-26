# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/team-admin-policy/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/team-admin-policy/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729858-729881](../../../../../../../reference/runtime/host-main.cjs#L729858-L729881) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729858-729881](../../../../../../../reference/runtime/host-main.cjs#L729858-L729881) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729858

Chamadas escritas diretamente neste corpo: `context2.deps.settings.subscribeToChanges`, `context2.onStop`, `createTeamAdminPolicyService`, `service.prefetch`.

SHA-256 do trecho: `36cf88eba242bcceefa14b5282db773d3fd1d4f1ff279aaf958f39bd406fbbe7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
