# `createListenerIntegrationReads/disconnectPlatform`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505520-505532](../../../../../../../reference/runtime/host-main.cjs#L505520-L505532) | `FunctionExpression` | sim | `platform2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505520-505532](../../../../../../../reference/runtime/host-main.cjs#L505520-L505532) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:505520

Chamadas escritas diretamente neste corpo: `.disconnectGithub`, `dashboard`, `invariant`, `new DisconnectGithubRequest`.

SHA-256 do trecho: `532d829e658ef2d95aff1784251e81104a0f8849f72685a51e46e6e87a7e2321`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
