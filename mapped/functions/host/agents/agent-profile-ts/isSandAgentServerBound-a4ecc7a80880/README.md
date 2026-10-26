# `isSandAgentServerBound`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-profile.ts` · [README do módulo](../../../../../modules/host/agents/agent-profile-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491531-491533](../../../../../../reference/runtime/host-main.cjs#L491531-L491533) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491531-491533](../../../../../../reference/runtime/host-main.cjs#L491531-L491533) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491531

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `readSandProfileServerId`.

SHA-256 do trecho: `c73abbce29f09db0312e968c27a4e4dc0fa6269d3e071a41e974250eaf695b26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
