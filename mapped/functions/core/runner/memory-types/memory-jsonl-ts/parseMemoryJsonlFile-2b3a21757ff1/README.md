# `parseMemoryJsonlFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-jsonl.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754619-754621](../../../../../../../reference/runtime/host-main.cjs#L754619-L754621) | `FunctionDeclaration` | não | `raw` |
| [evaluation:537586-537588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537586-L537588) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754619-754621](../../../../../../../reference/runtime/host-main.cjs#L754619-L754621) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537586-537588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537586-L537588) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754619

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `raw.split`.

SHA-256 do trecho: `ac4432fe234b10c373ea0f76b1dc563e0b9fdf03a3de6ce03ebcf86ac67db7a4`.

### evaluation:537586

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `raw.split`.

SHA-256 do trecho: `ac4432fe234b10c373ea0f76b1dc563e0b9fdf03a3de6ce03ebcf86ac67db7a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
