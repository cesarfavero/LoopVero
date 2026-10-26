# `shrinkImageForModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/screenshot-image.ts` · [README do módulo](../../../../../../modules/core/runner/tools/screenshot-image-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776855-776861](../../../../../../../reference/runtime/host-main.cjs#L776855-L776861) | `FunctionDeclaration` | sim | `ctx, bytes, options2` |
| [evaluation:576500-576506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576500-L576506) | `FunctionDeclaration` | sim | `ctx, bytes, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776855-776861](../../../../../../../reference/runtime/host-main.cjs#L776855-L776861) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:576500-576506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576500-L576506) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:776855

Chamadas escritas diretamente neste corpo: `.toString`, `boundInlineImageForModel`, `import_node_buffer7.Buffer.from`.

SHA-256 do trecho: `53dc9f0546210d856c5057d817416d003a4d6ed5ffa71791254c8039a4c2a938`.

### evaluation:576500

Chamadas escritas diretamente neste corpo: `.toString`, `boundInlineImageForModel`, `import_node_buffer11.Buffer.from`.

SHA-256 do trecho: `607440b9bd41630038ee23d1958b7c1adadf47f1e3f23b3f89b7ef9a9b11f630`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
