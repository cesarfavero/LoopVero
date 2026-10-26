# `parseImageProbe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-display-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498178-498189](../../../../../../../reference/runtime/host-main.cjs#L498178-L498189) | `FunctionDeclaration` | não | `json3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498178-498189](../../../../../../../reference/runtime/host-main.cjs#L498178-L498189) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:498178

Chamadas escritas diretamente neste corpo: `gridGroups.find`, `parseProbeJson`, `primaryStreamOf`, `probe.stream_groups.filter`, `tileGridOf`, `videoStreamsOf`.

SHA-256 do trecho: `47c5fcc5a12cd36804a3cb91f25b57ebd9ae00176ba6415e1058fe743c97951a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
