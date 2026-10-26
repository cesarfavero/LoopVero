# `profileConfigFromJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490813-490822](../../../../../../reference/runtime/host-main.cjs#L490813-L490822) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:629024-629033](../../../../../../reference/runtime/sand-eval-runner.cjs#L629024-L629033) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490813-490822](../../../../../../reference/runtime/host-main.cjs#L490813-L490822) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629024-629033](../../../../../../reference/runtime/sand-eval-runner.cjs#L629024-L629033) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:490813

Chamadas escritas diretamente neste corpo: `isSandProfileNamedBy`, `parsed2.avatarColor.trim`, `parsed2.avatarShape.trim`, `parsed2.title.trim`.

SHA-256 do trecho: `7ddd7ef695f1182b7faeb19b3d351fcb2b01d943bf9b3f93be5949b1a01bd9f5`.

### evaluation:629024

Chamadas escritas diretamente neste corpo: `isSandProfileNamedBy`, `parsed.avatarColor.trim`, `parsed.avatarShape.trim`, `parsed.title.trim`.

SHA-256 do trecho: `9f66415e89f6d6ada42cad80f8c70dd694cab1c8ceb2aa257d2860ff92055cb0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
