# `hostCapabilities`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491727-491737](../../../../../reference/runtime/host-main.cjs#L491727-L491737) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491727-491737](../../../../../reference/runtime/host-main.cjs#L491727-L491737) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:491727

Chamadas escritas diretamente neste corpo: `.ensureManagedSkill`, `deps.extensions.api`, `experiments.getDynamicConfig`, `sandShareBotExportPolicyOf`.

SHA-256 do trecho: `f2e23e56e23758eb8e2f509b4b42f80a62f05b7d74e578ec4a6137107602f2ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
