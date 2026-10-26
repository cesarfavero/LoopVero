# `collapseNumberedCommands`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558312-558335](../../../../../../reference/runtime/host-main.cjs#L558312-L558335) | `FunctionDeclaration` | não | `commands` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558312-558335](../../../../../../reference/runtime/host-main.cjs#L558312-L558335) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:558312

Chamadas escritas diretamente neste corpo: `.filter`, `collapsed.push`, `commands.map`, `last.hotkey.mac.slice`, `last.hotkey.other.slice`, `new Set`, `numbered.findLast`, `numberedCommand`, `seenPrefixes.add`, `seenPrefixes.has`.

SHA-256 do trecho: `ad702baa46dbd420072b4323bcf786bc2a8251952731499b4fc32433b55ca48f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
