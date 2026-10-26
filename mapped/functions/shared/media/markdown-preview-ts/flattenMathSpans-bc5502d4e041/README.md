# `flattenMathSpans`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722100-722107](../../../../../../reference/runtime/host-main.cjs#L722100-L722107) | `FunctionDeclaration` | não | `input2` |
| [evaluation:540077-540084](../../../../../../reference/runtime/sand-eval-runner.cjs#L540077-L540084) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722100-722107](../../../../../../reference/runtime/host-main.cjs#L722100-L722107) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540077-540084](../../../../../../reference/runtime/sand-eval-runner.cjs#L540077-L540084) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722100

Chamadas escritas diretamente neste corpo: `codeSpanRanges`, `fencedBlockRanges`, `input2.replace`.

SHA-256 do trecho: `66f2e72d2fa5933ea603c3db6b44f6d5a271e87aaf49f163aafc06f99cb70347`.

### evaluation:540077

Chamadas escritas diretamente neste corpo: `codeSpanRanges`, `fencedBlockRanges`, `input2.replace`.

SHA-256 do trecho: `66f2e72d2fa5933ea603c3db6b44f6d5a271e87aaf49f163aafc06f99cb70347`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
