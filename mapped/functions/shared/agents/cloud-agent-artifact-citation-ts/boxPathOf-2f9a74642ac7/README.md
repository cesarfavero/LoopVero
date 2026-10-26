# `boxPathOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/cloud-agent-artifact-citation.ts` · [README do módulo](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508139-508146](../../../../../../reference/runtime/host-main.cjs#L508139-L508146) | `FunctionDeclaration` | não | `source` |
| [evaluation:490251-490258](../../../../../../reference/runtime/sand-eval-runner.cjs#L490251-L490258) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508139-508146](../../../../../../reference/runtime/host-main.cjs#L508139-L508146) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:490251-490258](../../../../../../reference/runtime/sand-eval-runner.cjs#L490251-L490258) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:508139

Chamadas escritas diretamente neste corpo: `/^file:/i.test`, `URL.canParse`, `new URL`, `source.trim`, `trimmed.startsWith`.

SHA-256 do trecho: `ce6ddfd72ecb8e3afd9b9d4f709ea53908b8b1c68c2c9d8068392a2fdab13b28`.

### evaluation:490251

Chamadas escritas diretamente neste corpo: `/^file:/i.test`, `URL.canParse`, `new URL`, `source.trim`, `trimmed.startsWith`.

SHA-256 do trecho: `ce6ddfd72ecb8e3afd9b9d4f709ea53908b8b1c68c2c9d8068392a2fdab13b28`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
