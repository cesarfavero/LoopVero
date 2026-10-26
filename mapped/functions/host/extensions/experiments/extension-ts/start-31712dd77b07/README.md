# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/experiments/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/experiments/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553536-553602](../../../../../../../reference/runtime/host-main.cjs#L553536-L553602) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553536-553602](../../../../../../../reference/runtime/host-main.cjs#L553536-L553602) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:553536

Chamadas escritas diretamente neste corpo: `auth2.peekAccessToken`, `auth2.subscribeToRenewal`, `context2.deps.settings.subscribeToChanges`, `context2.deps.settings.subscribeToExperimentOverrides`, `context2.deps.settings.subscribeToFeatureFlagOverrides`, `context2.onStop`, `new SandExperimentService`, `service.handleAuthChange`, `service.start`, `tokenSubjectScope`.

SHA-256 do trecho: `59483a5b6aa98c76d774a9fc95ff51a1dd2c40c112f1ef18b3e4acaa7875fbf6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
