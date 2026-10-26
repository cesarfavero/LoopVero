# `clampLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/sand-text.ts` · [README do módulo](../../../../modules/shared/sand-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:227867-227869](../../../../../reference/runtime/host-main.cjs#L227867-L227869) | `FunctionDeclaration` | não | `raw, maxLength` |
| [evaluation:474403-474405](../../../../../reference/runtime/sand-eval-runner.cjs#L474403-L474405) | `FunctionDeclaration` | não | `raw, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227867-227869](../../../../../reference/runtime/host-main.cjs#L227867-L227869) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474403-474405](../../../../../reference/runtime/sand-eval-runner.cjs#L474403-L474405) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:227867

Chamadas escritas diretamente neste corpo: `.slice`, `.trim`, `raw.replace`.

SHA-256 do trecho: `0bd3aae6f2f938e403ddc6717c9525e458bda2cbaf10a49278d87f6fc382c72a`.

### evaluation:474403

Chamadas escritas diretamente neste corpo: `.slice`, `.trim`, `raw.replace`.

SHA-256 do trecho: `0bd3aae6f2f938e403ddc6717c9525e458bda2cbaf10a49278d87f6fc382c72a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
