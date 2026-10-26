# `writeProfileJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/agent-profile.ts` · [README do módulo](../../../../../modules/host/agents/agent-profile-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491544-491547](../../../../../../reference/runtime/host-main.cjs#L491544-L491547) | `FunctionDeclaration` | não | `path33, serialized` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491544-491547](../../../../../../reference/runtime/host-main.cjs#L491544-L491547) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:491544

Chamadas escritas diretamente neste corpo: `profileFileMode`, `readProfileText`, `writeSandDataFileSync`.

SHA-256 do trecho: `bb0729bca7f91a84a4eb6befaf6cc83e80cdc9d68653aaf16598c0de0f9a2e7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
