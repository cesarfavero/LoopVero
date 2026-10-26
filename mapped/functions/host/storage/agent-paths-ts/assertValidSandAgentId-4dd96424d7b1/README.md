# `assertValidSandAgentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/agent-paths.ts` · [README do módulo](../../../../../modules/host/storage/agent-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494896-494902](../../../../../../reference/runtime/host-main.cjs#L494896-L494902) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494896-494902](../../../../../../reference/runtime/host-main.cjs#L494896-L494902) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494896

Chamadas escritas diretamente neste corpo: `new SandInvalidAgentIdError`, `parseAgentId`.

Alvos de lançamento explícito: `SandInvalidAgentIdError`.

SHA-256 do trecho: `c8b1fdcb67787cb51362a38236d7a0bbe4bfc833c7ecd897a1cd56cc76dd0349`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
