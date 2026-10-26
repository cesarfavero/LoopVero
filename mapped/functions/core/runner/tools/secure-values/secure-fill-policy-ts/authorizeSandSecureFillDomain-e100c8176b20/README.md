# `authorizeSandSecureFillDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766689-766704](../../../../../../../../reference/runtime/host-main.cjs#L766689-L766704) | `FunctionDeclaration` | não | `metadata2, target, options2 = {}` |
| [evaluation:562202-562217](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562202-L562217) | `FunctionDeclaration` | não | `metadata2, target, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766689-766704](../../../../../../../../reference/runtime/host-main.cjs#L766689-L766704) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:562202-562217](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562202-L562217) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:766689

Chamadas escritas diretamente neste corpo: `frameClassification`, `metadata2.domains.some`, `parseFillSite`, `secureValueFillsAnySite`, `targetDomainOf`.

SHA-256 do trecho: `1d6294d4fe7ab3bcb2b9c3116ec6ea7708ad3833943ce96f5ef6c71c8a98404c`.

### evaluation:562202

Chamadas escritas diretamente neste corpo: `frameClassification`, `metadata2.domains.some`, `parseFillSite`, `secureValueFillsAnySite`, `targetDomainOf`.

SHA-256 do trecho: `1d6294d4fe7ab3bcb2b9c3116ec6ea7708ad3833943ce96f5ef6c71c8a98404c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
