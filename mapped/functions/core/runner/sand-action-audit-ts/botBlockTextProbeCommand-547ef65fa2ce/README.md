# `botBlockTextProbeCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512498-512501](../../../../../../reference/runtime/sand-eval-runner.cjs#L512498-L512501) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512498-512501](../../../../../../reference/runtime/sand-eval-runner.cjs#L512498-L512501) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512498

Chamadas escritas diretamente neste corpo: `.toString`, `JSON.stringify`, `import_node_buffer4.Buffer.from`.

SHA-256 do trecho: `6c619c14cff77249bbd973c91853b7ee5025efb51825e76b32d49f0dedb770ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
