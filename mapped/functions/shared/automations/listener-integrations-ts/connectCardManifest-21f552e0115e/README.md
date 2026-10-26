# `connectCardManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/listener-integrations.ts` · [README do módulo](../../../../../modules/shared/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485697-485699](../../../../../../reference/runtime/host-main.cjs#L485697-L485699) | `FunctionDeclaration` | não | `platform2` |
| [evaluation:548098-548100](../../../../../../reference/runtime/sand-eval-runner.cjs#L548098-L548100) | `FunctionDeclaration` | não | `platform` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485697-485699](../../../../../../reference/runtime/host-main.cjs#L485697-L485699) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548098-548100](../../../../../../reference/runtime/sand-eval-runner.cjs#L548098-L548100) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485697

Chamadas escritas diretamente neste corpo: `SCM_CONNECT_CARD_INTEGRATIONS.find`, `listenerIntegrationManifest`.

SHA-256 do trecho: `38206b4fe365a6f565442e6d83d769457a975c838542b4cc72beedeb162b4ef2`.

### evaluation:548098

Chamadas escritas diretamente neste corpo: `SCM_CONNECT_CARD_INTEGRATIONS.find`, `listenerIntegrationManifest`.

SHA-256 do trecho: `66a3c61298bcf2dcf988add26ce2f1f3c7173a3ca206f890c6ebd64a5b96fd93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
