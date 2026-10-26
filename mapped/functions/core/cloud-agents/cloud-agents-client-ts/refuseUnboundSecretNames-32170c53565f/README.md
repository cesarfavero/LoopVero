# `refuseUnboundSecretNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512502-512506](../../../../../../reference/runtime/host-main.cjs#L512502-L512506) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512502-512506](../../../../../../reference/runtime/host-main.cjs#L512502-L512506) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:512502

Chamadas escritas diretamente neste corpo: `new SandCloudAgentSecretForwardError`.

Alvos de lançamento explícito: `SandCloudAgentSecretForwardError`.

SHA-256 do trecho: `ad5a7fa6760d12e7f08384833c335b9626dff7f94df6b8127d928a2fea8c3ba4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
