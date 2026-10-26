# `listenerIntegrationManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/listener-integrations.ts` · [README do módulo](../../../../../modules/shared/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485677-485679](../../../../../../reference/runtime/host-main.cjs#L485677-L485679) | `FunctionDeclaration` | não | `platform2` |
| [evaluation:548078-548080](../../../../../../reference/runtime/sand-eval-runner.cjs#L548078-L548080) | `FunctionDeclaration` | não | `platform` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485677-485679](../../../../../../reference/runtime/host-main.cjs#L485677-L485679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548078-548080](../../../../../../reference/runtime/sand-eval-runner.cjs#L548078-L548080) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485677

Chamadas escritas diretamente neste corpo: `LISTENER_INTEGRATIONS.find`.

SHA-256 do trecho: `abbf2fcf07259a46be0e85117204f69f2f4ffdcf0365fe1a28d347a58139e5bf`.

### evaluation:548078

Chamadas escritas diretamente neste corpo: `LISTENER_INTEGRATIONS.find`.

SHA-256 do trecho: `a1d74eba14108dbb4b286a347162b8631a65ac3db265c3d7a348a9653f386c4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
