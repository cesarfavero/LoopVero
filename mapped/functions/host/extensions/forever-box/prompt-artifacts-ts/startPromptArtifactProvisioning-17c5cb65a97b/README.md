# `startPromptArtifactProvisioning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `host/extensions/forever-box/prompt-artifacts.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680792-680851](../../../../../../../reference/runtime/host-main.cjs#L680792-L680851) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680792-680851](../../../../../../../reference/runtime/host-main.cjs#L680792-L680851) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680792

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `createRetryPolicy`, `deps.subscribe.map`, `schedule`.

SHA-256 do trecho: `33cd07ed5a7967f02d3d8627815ff0c664f14afe6e291e4bad87fd1b0378a945`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
