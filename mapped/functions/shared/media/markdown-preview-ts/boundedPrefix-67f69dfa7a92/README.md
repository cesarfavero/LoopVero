# `boundedPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722136-722139](../../../../../../reference/runtime/host-main.cjs#L722136-L722139) | `FunctionDeclaration` | não | `text3, maxChars` |
| [evaluation:540113-540116](../../../../../../reference/runtime/sand-eval-runner.cjs#L540113-L540116) | `FunctionDeclaration` | não | `text3, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722136-722139](../../../../../../reference/runtime/host-main.cjs#L722136-L722139) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540113-540116](../../../../../../reference/runtime/sand-eval-runner.cjs#L540113-L540116) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722136

Chamadas escritas diretamente neste corpo: `flatCopy`, `isHighSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 do trecho: `63f6f9b4701969173262f95c44be885b2c9c7589a95a80daeb8d83fb946e4a28`.

### evaluation:540113

Chamadas escritas diretamente neste corpo: `flatCopy`, `isHighSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 do trecho: `63f6f9b4701969173262f95c44be885b2c9c7589a95a80daeb8d83fb946e4a28`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
