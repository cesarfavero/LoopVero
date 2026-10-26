# `refusalDetail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537851-537854](../../../../../../../reference/runtime/host-main.cjs#L537851-L537854) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537851-537854](../../../../../../../reference/runtime/host-main.cjs#L537851-L537854) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:537851

Chamadas escritas diretamente neste corpo: `[computed].details.detail.trim`, `error64.findDetails`.

SHA-256 do trecho: `7b65d7fd074b41fcdae316d85fe0739edef23aacf66f94335fe4aa2d3a31940a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
