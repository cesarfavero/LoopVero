# `bindSandProfileToServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-profile.ts` · [README do módulo](../../../../../modules/host/agents/agent-profile-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491615-491617](../../../../../../reference/runtime/host-main.cjs#L491615-L491617) | `FunctionDeclaration` | não | `agentDir, profile, binding` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491615-491617](../../../../../../reference/runtime/host-main.cjs#L491615-L491617) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491615

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `writeServerBackedProfileFile`.

SHA-256 do trecho: `c6bdc525dd5ef35b4b7f7f8a8ac7437d29d19e4306be90f59f3e46b886fd06bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
