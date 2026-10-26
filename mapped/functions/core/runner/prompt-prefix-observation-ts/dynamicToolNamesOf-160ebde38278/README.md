# `dynamicToolNamesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546463-546469](../../../../../../reference/runtime/sand-eval-runner.cjs#L546463-L546469) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546463-546469](../../../../../../reference/runtime/sand-eval-runner.cjs#L546463-L546469) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546463

Chamadas escritas diretamente neste corpo: `.filter`, `CURSOR_NAMESPACE_TOOLS.exec`, `dynamicToolsByIdentity.get`, `dynamicToolsByIdentity.has`, `dynamicToolsByIdentity.set`, `listed.split`, `messageText`.

SHA-256 do trecho: `fedead881b41b1597a99ec91a51b2ab3eb8e854a1171ef8cf3c443880cb5248e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
