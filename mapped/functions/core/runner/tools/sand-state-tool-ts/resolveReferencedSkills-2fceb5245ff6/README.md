# `resolveReferencedSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762712-762720](../../../../../../../reference/runtime/host-main.cjs#L762712-L762720) | `FunctionDeclaration` | não | `prompt, deps` |
| [evaluation:555322-555330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555322-L555330) | `FunctionDeclaration` | não | `prompt, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762712-762720](../../../../../../../reference/runtime/host-main.cjs#L762712-L762720) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:555322-555330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555322-L555330) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:762712

Chamadas escritas diretamente neste corpo: `.map`, `collectMentionedSkills`, `deps.skillStore.list`.

SHA-256 do trecho: `d7fa6316d712b015e880883c0aa80e8fc7695d7d038d3f5e0ecf533205700b3c`.

### evaluation:555322

Chamadas escritas diretamente neste corpo: `.map`, `collectMentionedSkills`, `deps.skillStore.list`.

SHA-256 do trecho: `d7fa6316d712b015e880883c0aa80e8fc7695d7d038d3f5e0ecf533205700b3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
