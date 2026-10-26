# `notConnectedLoginGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751857-751861](../../../../../../../reference/runtime/host-main.cjs#L751857-L751861) | `FunctionDeclaration` | sim | `offer, guidance` |
| [evaluation:524923-524927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524923-L524927) | `FunctionDeclaration` | sim | `offer, guidance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751857-751861](../../../../../../../reference/runtime/host-main.cjs#L751857-L751861) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:524923-524927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524923-L524927) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:751857

Chamadas escritas diretamente neste corpo: `.catch`, `offer.isDeclined`.

SHA-256 do trecho: `693b07166f4d78769a7348818bbfb6d8a0a97f5aafe2c5993094dfee08d4024e`.

### evaluation:524923

Chamadas escritas diretamente neste corpo: `.catch`, `offer.isDeclined`.

SHA-256 do trecho: `693b07166f4d78769a7348818bbfb6d8a0a97f5aafe2c5993094dfee08d4024e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
