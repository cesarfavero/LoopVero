# `updateCloudAgentPublishApp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537922-537952](../../../../../../../reference/runtime/host-main.cjs#L537922-L537952) | `FunctionDeclaration` | sim | `client, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537922-537952](../../../../../../../reference/runtime/host-main.cjs#L537922-L537952) | 4 | 0 | 1 | 3 | 0 | 1 |

### host:537922

Chamadas escritas diretamente neste corpo: `client.updateApp`, `new UpdateAppRequest`, `updateRefusalOf`, `visibilityOf2`, `visibilityToProto`.

SHA-256 do trecho: `410a74f9c24b9436f17507041de15435b33c4ca09c0a72d33cf8d1f80f1b162d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
