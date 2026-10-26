# `createSandProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-profile.ts` · [README do módulo](../../../../../modules/host/agents/agent-profile-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491574-491581](../../../../../../reference/runtime/host-main.cjs#L491574-L491581) | `FunctionDeclaration` | não | `agentDir, profile, binding` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491574-491581](../../../../../../reference/runtime/host-main.cjs#L491574-L491581) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:491574

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `writeSandProfileFile`, `writeServerBackedProfileFile`.

SHA-256 do trecho: `d113c9f2af39c038748e34fe37c2107ef098c3d44f4362c5660f47b1dbf57e6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
